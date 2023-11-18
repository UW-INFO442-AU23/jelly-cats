import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ref, get, update, getDatabase, set } from 'firebase/database';
import { Navbar } from '../Navbar/Navbar.js';
import Return from '../../imgs/Events/Unregistered.png';
import CompletedFlashcards from '../../imgs/Events/Flashcards.png';

function Flashcards(props) {
    const user = props.user;
    const email = user.email;
    const emailKey = email.replace('.', ',');
    const { eventName } = useParams();
    const [flashcards, setFlashcards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTerm, setShowTerm] = useState(true);
    const [totalVocabCount, setTotalVocabCount] = useState(0);
    const [inRotationVocabCount, setInRotationVocabCount] = useState(0);
    const [removedVocabCount, setRemovedVocabCount] = useState(0);

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

    const randomizeCard = () => {
        const randomIndex = Math.floor(Math.random() * flashcards.length);
        setCurrentIndex(randomIndex);
        setShowTerm(true);
    };

    const rewindCard = () => {
        const newIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
        setCurrentIndex(newIndex);
        setShowTerm(true);
    };

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
        if (flashcards.length === currentIndex + 1) {
            setCurrentIndex(0);
            setShowTerm(true);
            updatedFlashcards.splice(currentIndex - 1, 1);
        } else {
            updatedFlashcards.splice(currentIndex, 1);
        }
        const database = getDatabase();
        const userVocab = ref(database, `Users/${emailKey}/Events/${eventName}/Vocabulary`);
        await set(userVocab, updatedFlashcards);
};

    if (flashcards.length === 0) {
        return (
            <div>
                <Navbar user={props.user} />
                <div className="flex flex-col items-center justify-center w-screen h-screen gap-10">
                    <img src={CompletedFlashcards} alt="successful flashcards" />
                    <p className="text-3xl font-bold">Congratulations! You’ve finished all the practice material.</p>
                    <p className="text-xl">Thanks for being proactive by preparing for this event!</p>
                    <Link to="/events">
                        <button className="px-3 py-2 text-white bg-indigo-500 rounded-lg">Return to Events</button>
                    </Link>
                </div>
            </div>
        );
    }

    if (flashcards.length === 0) {
        return (
            <>
                <Navbar user={props.user} />
                <div className="flex flex-col items-center justify-center w-screen h-screen gap-10">
                    <img src={Return} alt="return to events"/>
                    <p className="text-3xl font-bold">No vocabulary at this time!</p>
                    <Link to="/events">
                        <button className="px-3 py-2 text-white bg-indigo-500 rounded-lg">Return to Events</button>
                    </Link>
                </div>
            </>
        )
    }

    return (
        <>
            <Navbar user={props.user} />
            <main className="flex flex-col items-center w-screen h-screen mt-6">
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
                <div className="flex justify-between w-4/5 sm:w-1/2 basis-1/4">
                    <button className="mb-8" onClick={rewindCard}>
                        <svg width="40" height="37" viewBox="0 0 47 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4604 3L3.00647 12.4674L12.4649 21.9258" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.7711 31.3856H34.5375C40.8441 31.3884 43.9974 28.2351 43.9974 21.9257C43.9974 15.6164 40.8441 12.4631 34.5375 12.4658H3.00464" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
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
                    <button className="mb-8" onClick={randomizeCard}>
                        <svg width="39" height="35" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.3333 3L43 9.75M43 9.75L36.3333 16.5M43 9.75H34.1111C32.046 9.75 31.0133 9.75 30.1547 9.92293C26.6287 10.6331 23.8722 13.424 23.1709 16.9941C23 17.8635 23 18.9091 23 21C23 23.0909 23 24.1365 22.8291 25.0059C22.1278 28.576 19.3713 31.3669 15.8452 32.077C14.9866 32.25 13.954 32.25 11.8889 32.25H3M36.3333 39L43 32.25M43 32.25L36.3333 25.5M43 32.25H34.1111C32.046 32.25 31.0133 32.25 30.1547 32.077C29.9904 32.0439 29.8276 32.0063 29.6667 31.9642M3 9.75H11.8889C13.954 9.75 14.9866 9.75 15.8452 9.92293C16.0097 9.95605 16.1724 9.99367 16.3333 10.0357" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </main>
        </>
    );
}

export default Flashcards;