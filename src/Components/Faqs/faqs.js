import React, { useEffect, useRef, useState } from 'react'
import { Faqs } from './faqs-elements'
import { Divider } from 'antd'
import { FaBars } from 'react-icons/fa'
import Message from '../Message/message'
import { Collapse, Spinner } from 'reactstrap'
import { List } from 'antd'
import ChatbotGIF from '../../images/chatbot_gif.gif'
const Faq = () => {
    const [isOpen, setIsOpen] = useState();
    const [questionSelect, setQuestionSelect] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [faqs, setFaqs] = useState([]);
    const [convo, setConvo] = useState([]);
    const scrollRef = useRef();

    const faq_list = [
        {
            faqID: '1',
            question: `What is Rodel's course in college?`,
            answer: 'His course in college is Bachelor of Science in Information Technology with specialization in Mobile and Web Applications.'
        },
        {
            faqID: '2',
            question: `What are Rodel's hobbies?`,
            answer: 'His hobbies are playing basketball, watching animes, and playing mobile games.'
        },
        {
            faqID: '3',
            question: `What is Rodel's expertise?`,
            answer: 'His expertise is more on Front-end development.'
        },
        {
            faqID: '4',
            question: 'Does Rodel accept freelance projects?',
            answer: 'Yes. He accept freelance projects.'
        }
    ]


    useEffect(() => {
        setFaqs(faq_list)

        let mounted = true;
        if (mounted)
            scrollRef.current?.scrollIntoView({ behavior: "smooth" })

        return () => {
            mounted = false;
        }
    }, [convo])

    const qSelect = (qId) => {
        const faq = faqs.find(item => item.faqID === qId);

        const setF = {
            question: faq.question,
            answer: faq.answer,
        }

        setConvo([...convo, setF]);
    }


    return (
        <Faqs>
            <div className="title">

                <p>Frequently Asked Questions</p>

            </div>
            <div className={!questionSelect ? "content-chatbot" : 'content-message'}>
                {
                    !questionSelect ? <div className='chatbot-welcome-message'>
                        <img src={ChatbotGIF} alt="this slowpoke moves" />
                        <span>
                            Hi, I'm <font color="#295074"><b>Delly</b></font>. Thanks for visiting Rodel's Website. How can I help you?
                        </span>
                    </div>

                        :
                        <div className="msgContainer">
                            <div className="msgContainerBody">
                                {convo.map((f, i) => {
                                    return <div key={i} ref={scrollRef}>
                                        <Message own={true} mode={2} message={{ text: f.question }} />
                                        <Message own={false} mode={2} message={{ text: f.answer }} />
                                    </div>
                                })}
                            </div>
                        </div>
                }








            </div>

            <div className="bottomContent" style={{ alignItems: 'center' }}>
                <FaBars className="bars" onClick={toggle} />
                <span style={{ color: '#c4c4c4', cursor: 'pointer', marginLeft: '10px' }} onClick={toggle}>Select a question</span>
            </div>
            <Collapse isOpen={isOpen} className="collQ">
                <Divider style={{ borderWidth: 1, margin: 0 }} />
                {faqs ? <List
                    dataSource={faqs}
                    renderItem={faq => (
                        <List.Item style={{ cursor: 'pointer', padding: '10px' }} className="faqList" onClick={() => { qSelect(faq.faqID); setQuestionSelect(true) }}> {faq.question} </List.Item>)} />
                    : <Spinner />}

            </Collapse>
        </Faqs>
    )
}

export default Faq
