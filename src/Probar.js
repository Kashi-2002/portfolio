import mongo from './images/mongo.png';
import fewshot from './images/fewshot.jpg';
import tabl from './images/tabtoexcel.jpg';
import au from './images/auto.jpg';
import style from './images/style.jpg';
import neu from './images/neural.png';
import vb from './images/vbvtr.png';
import bob from './images/bob.png';



const Probar = () =>{
    return (
        <div className="start" id='Pro'>
    <h1 className="Project">Projects</h1>
    <div className="Proflex">
    <div className="card">
  <img src={mongo} class="card-img-top" alt="Sorry couldn't load image"/>
  <div className="card-body">
    <h5 className="card-title">MongoDb Agent</h5>
    <p className="card-text">This project creates a bot that serves as a conversational agent where user can interact regarding MongoDb database. </p>
    <button type="button" ><a href="https://github.com/Kashi-2002/MongoDbAgent" style={{'color': 'white'}}>Link to project</a></button>
  </div>
  </div>

  <div className="card">
  <img src={fewshot} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">FewShot Image Detector</h5>
    <p className="card-text">This project serves for detection of image without the model being exposed to any such images before.It requires few examples of the images which require to be detected.</p>
    <button type="button"  ><a href="https://github.com/Kashi-2002/fewshotapp" style={{'color': 'white'}}>Link to project</a></button>
  </div>
  </div>

  <div className="card">
  <img src={tabl} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Scanned Tables to Excel Convertor</h5>
    <p className="card-text">Scanned images of tables with defined borders and in English language are converted to Excel data which makes it easier for anlysis.</p>
    <button type="button" ><a href="https://github.com/Kashi-2002/englishocr" style={{'color': 'white'}}>Link to project</a></button>
  </div>
  </div>

  <div className="card">
  <img src={au} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Automated Pipeline for Training</h5>
    <p className="card-text">This web app simplifies the process of training models.Everything is handled by the server and the logs can be checked on Wandb page currently its works for translation tasks.</p>
    <button type="button" ><a href="https://github.com/Kashi-2002/AutomatedPipelineWandb" style={{'color': 'white'}}>Link to project</a></button>
  </div>
  </div>
  
  <div className="card">
  <img src={style} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Style Predictor</h5>
    <p className="card-text">Given a paticular style this notebook searches across the database and recommends the best matching pairs that go well with it.</p>
    <button type="button"><a href="https://github.com/SaurabhModi26/curience_fashion_trends/tree/main" style={{'color': 'white'}}>Link to project</a></button>
  </div>
  </div>


  <div className="card">
  <img src={neu} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Neural Style Transfer Retaining Background</h5>
    <p className="card-text">Neural Style transfer is applied to a given image based on the style given but the catch here is the background of the content image is kept intact. The style is applied only to foreground image.</p>
    <button type="button" ><a href="https://github.com/Kashi-2002/Neural-Style-Transfer" style={{'color': 'white'}}>Link to project</a></button>
  </div>
  </div>

  <div className="card">
  <img src={vb} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Voice Based Virtual Trail Assistant</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button"><a href="https://github.com/Kashi-2002/Voice-Based-Virtual-Trial-Room" style={{'color': 'white'}}>Link to project</a></button>
  </div>
  </div>



  <div className="card">
  <img src={bob} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Book By Brain</h5>
    <p className="card-text">This project is used to understand the emotions of a person based on the brain waves and recommend them books from a database that we created.</p>
    <button type="button" ><a href="https://github.com/Kashi-2002/Book_By_Brain" style={{'color': 'white'}} >Link to project</a></button>
  </div>
  </div>


  </div>
  </div>
    );
    
};
export default Probar;
