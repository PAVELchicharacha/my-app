import logo from './pic/logo.png'
import altE from './pic/alt.jpg'
import maxim from './pic/madmax.jpg'
import profile from './pic/user-profile-focus--close-geometric-human-person-profile-focus-user.jpg'
import cart from './pic/shopping-cart-1--shopping-cart-checkout.jpg'
function App(){
    return(
        <>
        <header>
            <img src={logo} alt="" className='logo'/>
            <div className="headetDiv">
                <img src={cart} alt="" />
                <img src={profile} alt="" />
                
            </div>
        </header>
            <h1>just for you</h1>
        <main>
            <div className='mainDiv1'>
                <img src={altE} alt="" className='altE'/>
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sint error cumque amet sunt nobis nihil, reprehenderit impedit fugiat quisquam assumenda maiores eaque, culpa distinctio similique possimus architecto consequatur dolore.</h3>
            </div>
            <div className='mainDiv2'>
                <img src={maxim} alt="" className='maxim'/>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, necessitatibus voluptas est vel esse nam voluptate quisquam aliquid laborum aperiam adipisci, obcaecati quidem blanditiis doloremque explicabo voluptatibus, mollitia eligendi consectetur.</h3>
            </div>
        </main>
        </>
    )
}
export default App;