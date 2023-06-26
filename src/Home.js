const Home = () => {
    function handleClick(e) {
        console.log('hello, ninjas!');
    }

    function handleClickAgain(name, e) { 
        console.log('hello ' + name, e); 
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>

            <button onClick={
                (e) =>  handleClickAgain('mario', e)
            }>Click on me again</button>
        </div>
     );
}
 
export default Home;