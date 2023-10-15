import Nav from "./component/Nav";
import Card from "./component/Card";

function App(){
  let cardImage1 ="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
  let cardImage2 = "https://images.pexels.com/photos/11833896/pexels-photo-11833896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  let cardImage3 = "https://images.pexels.com/photos/17706646/pexels-photo-17706646/free-photo-of-news-on-laptop-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return(
    <>
    <Nav />
    <div className="container card-container gap-3 mt-3 flex mx-auto md:px-7">
    <Card aboutTitle="Macbook" />
    <Card cardImage={cardImage2} aboutTitle="Samsung" />
    <Card cardImage={cardImage3} aboutTitle="HP" />
    </div>
    </>
  );
}

export default App;