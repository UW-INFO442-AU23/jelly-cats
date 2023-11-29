import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ref, get, update, getDatabase, set } from 'firebase/database';
import { Navbar } from '../Navbar/Navbar.js';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.js'
import Return from '../../imgs/Events/Unregistered.png';
import CompletedFlashcards from '../../imgs/Events/Flashcards.png';

function Flashcards(props) {
    const user = props.user;
    const email = user.email;
    const emailKey = email.replace('.', ',');
    const eventName = useParams().EventName;
    const [flashcards, setFlashcards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTerm, setShowTerm] = useState(true);
    const [totalVocabCount, setTotalVocabCount] = useState(0);
    const [inRotationVocabCount, setInRotationVocabCount] = useState(0);
    const [removedVocabCount, setRemovedVocabCount] = useState(0);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const fetchFlashcards = async () => {
            try {
                const database = getDatabase();
                const vocabRef = ref(database, `Events/${eventName}/Vocabulary`);
                const userEventsRef = ref(database, `Users/${emailKey}/Events/${eventName}`);
                const userVocab = ref(database, `Users/${emailKey}/Events/${eventName}/Vocabulary`);
                const eventSnapshot = await get(vocabRef);
                const userSnapshot = await get(userVocab);
                if (userSnapshot.exists()) {
                    const eventFlashcard = eventSnapshot.val();
                    const userFlashcard = userSnapshot.val();
                    setFlashcards(userFlashcard.filter(item => item !== undefined));
                    setTotalVocabCount(eventFlashcard.length);
                    setInRotationVocabCount(userFlashcard.length);
                    setRemovedVocabCount(totalVocabCount - inRotationVocabCount);
                } else {
                    if(eventSnapshot.exists()) {
                        const eventFlashcard = eventSnapshot.val();
                        setFlashcards(eventFlashcard);
                        setTotalVocabCount(eventFlashcard.length);
                        setInRotationVocabCount(eventFlashcard.length);
                        await update(userEventsRef, { "Vocabulary": eventFlashcard });
                    } else {
                        console.log("No vocabulary data found for the event.");
                    }
                }
            } catch (error) {
                console.error("Error reading vocabulary:", error);
            }
        };
        fetchFlashcards();
    }, [eventName, emailKey, inRotationVocabCount, totalVocabCount, flashcards]);

    const flipCard = () => {
        setShowTerm(!showTerm);
    };

    const keepInRotation = () => {
        const nextIndex = (currentIndex + 1) % flashcards.length;
        setCurrentIndex(nextIndex);
        setShowTerm(true);
    };
    
    const removeFromRotation = async () => {
        const updatedFlashcards = [...flashcards];
        if (flashcards.length === 1) {
            setFinished(true);
        } else if (flashcards.length === currentIndex + 1) {
            setCurrentIndex(0);
            setShowTerm(true);
        }
        updatedFlashcards.splice(currentIndex, 1);
        const database = getDatabase();
        const userVocab = ref(database, `Users/${emailKey}/Events/${eventName}/Vocabulary`);
        await set(userVocab, updatedFlashcards);
    };
    
    if (finished) {
        return (
            <div>
                <Navbar user={user} />
                <div className="flex flex-col items-center justify-center w-screen h-screen gap-10">
                    <img src={CompletedFlashcards} alt="successful flashcards" />
                    <p className="text-3xl font-bold">Congratulations! You’ve finished all the practice material.</p>
                    <p className="text-xl">Thanks for being proactive by preparing for this event!</p>
                    <Link to="/Events">
                        <button className="px-3 py-2 text-white bg-indigo-500 rounded-lg">Return to Events</button>
                    </Link>
                </div>
            </div>
        );
    }

    if (flashcards.length === 0) {
        return (
            <>
                <Navbar user={user} />
                <div className="flex flex-col items-center justify-center w-screen h-screen gap-10">
                    <img src={Return} alt="return to events"/>
                    <p className="text-3xl font-bold">No vocabulary at this time!</p>
                    <Link to="/Events">
                        <button className="px-3 py-2 text-white bg-indigo-500 rounded-lg">Return to Events</button>
                    </Link>
                </div>
            </>
        )
    }

    return (
        <>
            <Navbar user={props.user} />
            <main className="flex flex-col items-center w-screen h-screen">
                <div className="w-screen">
                    <Breadcrumbs />
                </div>
                <div className="flex flex-row items-center justify-between w-4/6 sm:w-2/5 basis-1/4">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div class="h-5 w-5 rounded-full bg-red-500"></div>
                        <p className="">Learning</p>
                        <p className="font-bold">{inRotationVocabCount}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div class="h-5 w-5 rounded-full bg-blue-500"></div>
                        <p className="">Total</p>
                        <p className="font-bold">{totalVocabCount - inRotationVocabCount}/{totalVocabCount}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div class="h-5 w-5 rounded-full bg-green-500"></div>
                        <p className="">Mastered</p>
                        <p className="font-bold">{removedVocabCount}</p>
                    </div>
                </div>
                {flashcards && flashcards.length > 0 ? (
                    <div
                        className={`basis-1/2 w-4/5 sm:w-4/6 h-2/5 p-4 bg-white rounded-3xl shadow-2xl border-2 border-indigo-500 text-6xl cursor-pointer ${showTerm ? '' : 'rotate-360'} flex items-center justify-center text-center`}
                        onClick={flipCard}
                    >
                        {showTerm ? flashcards[Object.keys(flashcards)[currentIndex]].Term : flashcards[Object.keys(flashcards)[currentIndex]].Definition}
                    </div>
                ) : null}
                <div className="flex justify-between w-3/5 sm:w-1/5 basis-1/4">
                    <button onClick={keepInRotation}>
                        <svg width="60" height="60" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="42.182" cy="42.182" r="42.182" fill="#CD4040"/>
                            <path d="M53.9992 30L41.5 42.4992M41.5 42.4992L29 54.9992M41.5 42.4992L29.0008 30M41.5 42.4992L54 54.9992" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button onClick={removeFromRotation}>
                        <svg width="60" height="60" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="42.546" cy="42.182" r="42.182" fill="#6FD173"/>
                            <path d="M36 55L62 29" stroke="white" stroke-width="8" stroke-linecap="round"/>
                            <path d="M36 55L24 43" stroke="white" stroke-width="8" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </main>
        </>
    );
}

export default Flashcards;