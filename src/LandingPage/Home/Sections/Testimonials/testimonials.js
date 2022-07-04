import React from 'react'
import {
    TestimonialsContainer, 
    Col3,
    Paragraph,
    Rating,
    UserImage,
    UserName,
    RowContainer,
    Title,
    Description,
} from './testimonials-elements';
const Testimonials = () => {    
    
    return (
        <>
        <style>{
      `
          .fa{  
            color: #ff523b;
          }

          .fa.fa-quote-left{
            font-size: 34px;
            color: #ff523b;
          }
          
      `  
    }</style>
        <TestimonialsContainer>
            <Title>Testimonials</Title>
            <Description>Here at Gmilk we're dedicated to make milk donation easy and accessible. See what users loves about GMILK</Description>
            <RowContainer>
                <Col3>
                    <i className="fa fa-quote-left"></i>
                    <Paragraph>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry's standard dummy text ever.
                    </Paragraph>
                    <Rating>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star-half-o" ></i>
                   </Rating>
                   <UserImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                   <UserName>First Last Name</UserName>
                </Col3>
                <Col3>
                    <i className="fa fa-quote-left"></i>
                    <Paragraph>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry's standard dummy text ever.
                    </Paragraph>
                    <Rating>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star-half-o" ></i>
                   </Rating>
                   <UserImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                   <UserName>First Last Name</UserName>
                </Col3>
                <Col3>
                    <i className="fa fa-quote-left"></i>
                    <Paragraph>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry's standard dummy text ever.
                    </Paragraph>
                    <Rating>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star" ></i>
                        <i className="fa fa-star-half-o" ></i>
                   </Rating>
                   <UserImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                   <UserName>First Last Name</UserName>
                </Col3>
            </RowContainer>
        </TestimonialsContainer>
        </> 
    )
}

export default Testimonials
