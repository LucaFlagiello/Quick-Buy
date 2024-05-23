import PageIndicator from "../../Components/PageIndicator/PageIndicator"
import { useSelector } from "react-redux"
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

export default function Faq() {

  const theme = useSelector((state) => state.theme.value);

  //Using questions array to avoid repeating the code
  const [questionsGroup, setQuestionsGroup]  = useState([
    { about: 'Shipping information', 
      questions: [
        {question: "How will my parcel be delivered", isSelected: false},
        {question: "Do I pay for delivery?", isSelected: false},
        {question: "How much i have to wait?", isSelected: false},
        {question: "Are there promotions?", isSelected: false},
      ],
    },
    
    { about: 'Order and Returns', 
      questions: [
        {question: "Tracking my order", isSelected: false},
        {question: "I haven't received my order", isSelected: false},
        {question: "How can i return on item?", isSelected: false},
        {question: "How can i cancel my order?", isSelected: false},
      ],
    },
    
    { about: 'Payments', 
      questions: [
        {question: "What payment types can i use?", isSelected: false},
        {question: "Can i pay by gift Card?", isSelected: false},
        {question: "How can i get a refund?", isSelected: false},
        {question: "How can i change payment type?", isSelected: false},
      ],
    },
  ]);

  const handleSelectedQuestions = (selectedQuestion) => {
    const updatedQuestionsGroup = questionsGroup.map((questionary) => ({
      ...questionary,
      questions: questionary.questions.map((button) =>
        button.question === selectedQuestion
          ? { ...button, isSelected: !button.isSelected }
          : {...button, isSelected: false}
      ),
    }));
    setQuestionsGroup(updatedQuestionsGroup);
  };

  return (
    <section className="px-4 pt-6">
      <PageIndicator page={'FAQ'}/>

      <main className="m-auto font-Poppins max-w-[1136px] mt-5 md:max-w-[710px] lg:max-w-[933px]">
        <div>
          <div>
            <h2 className="uppercase font-Roboto font-medium text-[2rem] mb-2">f.a.q</h2>
            <p className="max-w-[500px]">
              Can&#8217;t find the answer you&#8217;re looking for? We&#8217;ve shared some of your most frequently asked questions to help you out!
            </p>
          </div>

          <div className="mt-6">
            {questionsGroup.map(questionary => (
              <div key={nanoid()} className="mb-6">
                <h3 className="font-medium font-Roboto text-[1.5rem] mb-4">{questionary.about}</h3>
                <div className="border border-b-0 rounded-md">
                  {questionary.questions.map(button => (
                    <div key={nanoid()} className="border-b last:rounded">
                      <div onClick={() => handleSelectedQuestions(button.question)} className={
                        button.isSelected 
                          ? "px-6 py-4 flex mb-3 justify-between cursor-pointer items-center" 
                          : " bg-[#fafafa] rounded-md px-6 py-4 flex items-center justify-between  cursor-pointer"}>
                        <p className={
                          button.isSelected 
                            ? `text-${theme} font-Roboto`
                            : 'font-Roboto'
                          }>{button.question}</p>
                        <span className={
                          button.isSelected 
                            ? `text-${theme} icon-[la--minus]` 
                            : `icon-[la--plus]`}>
                        </span>
                      </div>
                      <div className={
                        button.isSelected 
                          ? "max-h-full transition-all duration-700 ease-in-out " 
                          : "overflow-hidden max-h-0"}>
                        <p className="text-[15px] px-6 pb-4">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  )
};