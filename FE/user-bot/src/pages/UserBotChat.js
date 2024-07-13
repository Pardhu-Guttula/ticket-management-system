import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Eng from "../assests/engineer-removebg-preview.png";
import Logo from "../assests/agent.jpg";
import userLogo from "../assests/user.png";
import { IoMdSend } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import backgroundImage from "../assests/chatBackground.jpg";
import botIcon from "../assests/botIcon.png"
import ChatSkeleton from "../components/ChatSkeleton";

const backgroundStyle = {
  backgroundImage: `url(${botIcon})`,
  backgroundSize: "30%",
  backgroundColor:"#f5f5f5",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

function UserBotChat() {
  const msgEnd = useRef(null);
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, Welcome to Agent Bot. How can I help you today?",
      isBot: true,
    },
  ]);
  
  const [isListening, setIsListening] = useState(false);
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
  const [botResponse, setBotResponse] = useState(null);
  const [utterance, setUtterance] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const question = event.results[last][0].transcript;
      setQuestion(question);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  });

  const startListening = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)();

    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const question = event.results[last][0].transcript;
      setQuestion(question);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.start();
  };

  const handleSend = async () => {
    const text = question;
    setQuestion("");
    setisLoading(true);

    const userMessage = {
      text: text,
      isBot: false,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);


    setisLoading(false);

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    }
  };
  useEffect(() => {
    if (
      botResponse &&
      !messages.some((msg) => msg.text === botResponse.text && msg.isBot)
    ) {
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }
  }, [botResponse, messages]);

  const handleEnter = async (e) => {
    if (e.key === "Enter") await handleSend();
  };

  useEffect(() => {
    const handleEnd = () => {
      setIsSpeaking(false);
    };

    if (utterance) {
      utterance.addEventListener("end", handleEnd);
    }

    return () => {
      if (utterance) {
        utterance.removeEventListener("end", handleEnd);
      }
    };
  }, [utterance]);

  return (
    <div className="bg-primary">
      <div>
        <div className="absolute right-6 top-1">
          <MdLogout className="cursor-pointer text-3xl text-[#5058e5] hover:text-[#31368C]"/>
        </div>

        <div
          className="min-h-[calc(100vh-6rem)] max-h-[calc(100vh-6rem)] m-12 flex flex-col bg-[#F8F8F8] rounded-2xl p-2 border-gray-300"
          style={{ ...backgroundStyle, zIndex: 9 }}
        >
          <div className="flex flex-col overflow-y-auto scroll-smooth custom-scrollbar ">
            {/* Chat section */}
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex p-2 ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                {message.isBot ? (
                  <>
                    <div className="shrink-0 w-10 ml-1 mr-2">
                      <img
                        src={Logo}
                        alt="Logo"
                        className="w-full rounded-full"
                      />
                    </div>
                    <div
                      className="text-justify p-2 rounded-2xl bg-[#d5d8f2] text-black text-left"
                    >
                      {message.text.split("\n").map((line, index) => (
                        <p key={index} className="font-poppins">
                          {line}
                        </p>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="text-justify p-2 rounded-2xl bg-gray-300 text-black text-right"
                    >
                      {message.text.split("\n").map((line, index) => (
                        <p key={index} className="font-poppins">
                          {line}
                        </p>
                      ))}
                    </div>
                    <div className="shrink-0 w-10 ml-1 mr-2 ">
                      <img
                        src={userLogo}
                        alt="Logo"
                        className="w-full rounded-full"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}

            <div ref={msgEnd} />
            {isLoading && <ChatSkeleton />}
          </div>

          <button
            className="text-lg px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[11rem]"
            onClick={() => window.open("/useragentchat", "_blank")}
          >
            Connect to Agent
          </button>


          <div className="mt-auto w-full flex flex-col items-center">
            <div className="flex w-4/6 items-center pt-2">
              <div className="flex w-full items-center border border-gray-500 bg-white rounded-xl p-1 focus-within:border-black focus-within:ring-1 focus-within:ring-black">
                <input
                  type="text"
                  className="w-full p-2 resize-none outline-none"
                  placeholder="Enter your query"
                  value={question}
                  onKeyDown={handleEnter}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                {/* <IoMdMic
                  className={`text-2xl text-black hover:text-[#83AF8C] cursor-pointer ml-1 ${
                    isListening ? "text-red-500" : ""
                  }`}
                  onClick={startListening}
                /> */}
              </div>
              <IoMdSend
                className="text-3xl text-[#829BFF] hover:text-[#5058e5] cursor-pointer ml-1"
                onClick={handleSend}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBotChat;
