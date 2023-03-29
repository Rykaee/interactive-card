import React from "react";



const Form = ({ inputText, setInputText }) => {

    const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
    };


//submitTodoHandler handles inputs from form and put those to array.
const submitTodoHandler = (e) => {


    setInputText("");
};




    return (
        <div className="wrapper">
                <div className="card-img">
                    <img src={require('../img/bg-main-desktop.png')} alt="logo" className="brand-logo"/>
                </div>
                <div className="card-fb">
                    <div className="card-front">
                        <img src={require('../img/bg-card-front.png')} alt="logo"/>
                    </div>
                    <div className="card-back">
                        <img src={require('../img/bg-card-back.png')} alt="logo"/>
                    </div>
                </div>

            <div className="container-fluid">
                <div className="card-details">
                    <form>
                        <div className="row">
                            <div className="col-lg-12">
                            <label for="name">CARDHOLDER NAME</label>
                                <input 
                                    value={inputText} 
                                    onChange={inputTextHandler} 
                                    type="text" 
                                    className="holdername-input" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <label for="name">CARD NUMBER</label>
                                <input 
                                    value={inputText} 
                                    onChange={inputTextHandler} 
                                    type="number" 
                                    className="cardnumber-input lg-3" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col lg-12">
                                <label for="name">EXP. DATE</label>
                                <input 
                                    value={inputText} 
                                    onChange={inputTextHandler} 
                                    type="number" 
                                    className="card-date" 
                                />
                            </div>
                            <div className="col lg-12">
                                <label for="name">(MM/YY)</label>
                                <input 
                                    value={inputText} 
                                    onChange={inputTextHandler} 
                                    type="number" 
                                    className="card-date" 
                                />
                            </div>
                            <div className="col lg-12">
                                <label for="name">CVC</label>
                                <input 
                                    value={inputText} 
                                    onChange={inputTextHandler} 
                                    type="number" 
                                    className="card-cvc" 
                                />
                            </div>                          
                        </div>
                        <button onClick={submitTodoHandler} className="btn btn-primary submit-button" type="submit">
                            Confirm
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;