import Navbar from "../nav/Nav";

export default function About(){
    return(
        <div className="about-us">
            <Navbar/>
            <div id = "why-best" className="row mt-5">
                <span className="col-2"/>
                <h2 className="col-10 mb-3">Why We Are the Best</h2>
                <span className="col-2"/>
                <ul className="col-10">
                    <li>Numera has the highest level of user-friendly solutions and company policy</li>
                    <li>Numera is the top choice for any types of company policy</li>
                    <li>Numera is the top tool for any business to safe their time and money.</li>
                </ul>
            </div>
          
            <div id = "ceo-words" className="row mt-5">
                <span className="col-2"/>
                <h2 className="col-10 mb-3">CEO says:</h2>
                <span className="col-2"/>
                    <q className="col-6">Numera is the top choice for accounting
                    businesses as we leverage cutting-edge Al technology to 
                    streamline document processing, saving time and reducing costs. 
                    Our user-friendly solutions and commitment to continuous improvement 
                    make us the ideal partner for efficient and innovative accounting operations. 
                    Your Data Instantly Organized.</q>
            </div>

            <div id = "our-services">
                <h1 className="text-center mt-5 mb-5">Our Services</h1>
               <div className="row">
                <span className="col-2"/>
               <ul className="col-8">
                    <li>Scanning documents</li>
                    <li>Scanning documents and integrating them into any app that Numera is connected with. (Coming soon)</li>
                    <li>Al which helps users better understand documents
                        (Coming soon)</li>
                </ul>
               </div>
            <div id="reviews">
                <h1 className="text-center mt-5 ">Reviews</h1>
                
            </div>
         

            </div>
        </div>
    );
}