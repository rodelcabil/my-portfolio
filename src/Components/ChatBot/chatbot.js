import React,{useState} from 'react'
import { Layout, Avatar, Popover, Tooltip} from 'antd';
import Faqs from '../Faqs/faqs';
import {VscHubot} from 'react-icons/vsc'
import {IoMdClose} from 'react-icons/io'

const {  Footer } = Layout;
const Chatbot = () => {

    const [faqVisible, setFaqVisible] = useState(false);
    const faqVisibleHandler = ()=> setFaqVisible(!faqVisible);

    
    return (
        <div>
        <style>{`
            .chatbot{
                cursor: pointer;
                background: #295074;
                box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.16);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .chatbot:hover{
                background: #272F46; 
            }
            .ant-popover-inner-content{
                background: transparent; 
                padding: 0;
            }
            .ant-popover.ant-popover-placement-leftBottom {
                position: fixed;
            }


            
        `}</style>
             <Footer style={{ textAlign: 'center', margin: '20px', background: 'transparent', position:  'fixed', bottom: 0, right: 0, padding: 0, borderRadius:'100%', zIndex: '100'}}>
                <Popover 
                    placement="leftBottom"
                    style={{ borderTopLeftRadius: '10px',borderTopRightRadius: '10px', position: 'absoulute', bottom: '0 !important', right: 0, padding: 0}}
                    content={<Faqs />}
                    trigger="click"
                    visible={faqVisible}
                    onVisibleChange={faqVisibleHandler}>
                  
                        <Avatar size={50} className="chatbot" icon={ faqVisible ?  <IoMdClose style={{fontSize: '30px',color: '#fff',}}/> : <VscHubot style={{fontSize: '30px',  }}/>  } />
                   
                </Popover>
            </Footer>
        
        </div>
    )
}

export default Chatbot
