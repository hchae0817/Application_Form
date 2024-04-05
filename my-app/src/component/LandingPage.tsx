import "../index.css"
import { useNavigate } from "react-router-dom";

function LandingPage(): JSX.Element {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col">
            {/* <div className="bg-modle_s"></div> */}
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <img className="object-cover" src="https://financialit.net/sites/default/files/insightful_technology_1.png"></img>
                {/* <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase mb-8">
                    Welcome to
                </h1>
                <h2 className="text-1xl md:text-3xl lg:text-4xl mb-8">
                    the application centre
                </h2> */}
                <a href="#detail" className="text-center">

                    <h3 className="text-1xl md:text-2xl lg:text-3xl font-black text-orange-600">
                        Built for those seeking high-growth career opportunities in data analytics and developing
                    </h3>
                    <br />

                    <button type="button" className="text-orange-700 border border-orange-700 hover:bg-orange-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:focus:ring-orange-800">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Icon description</span>
                    </button>
                </a>
            </main>

            <div className="p-20">
                <main id="detail" className="p-20 bg-gradient-to-r from-yellow-500 to-orange-500 bg-opacity-10">
                    <div className="grid grid-cols-3 gap-4 place-items-stretch h-56">

                        <div className="text-center">
                            <h2 className="text-1xl md:text-2xl lg:text-3xl font-black">
                                Career <br /> Starters
                            </h2>
                            <h2 className="text-1xl md:text-1xl lg:text-2xl">
                                Start a career as a Data Analyst, with a portfolio of work and key on-the-job competencies
                            </h2>

                        </div>

                        <div className="text-center">
                            <h2 className="text-1xl md:text-2xl lg:text-3xl font-black">
                                Career <br /> Changers
                            </h2>
                            <h2 className="text-1xl md:text-1xl lg:text-2xl">
                                Make a career change and switch to a high-growth path in Data Analysis
                            </h2>

                        </div>
                        <div className="text-center">
                            <h2 className="text-1xl md:text-2xl lg:text-3xl font-black">
                                Career <br /> Advancers
                            </h2>
                            <h2 className="text-1xl md:text-1xl lg:text-2xl">
                                Formalise or advance your knowledge and skills in the field of Data Analytics
                            </h2>

                        </div>

                    </div>
                </main>
            </div>


            <button onClick={() => navigate("/form")} className="text-lg md:text-1xl lg:text-2xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-black bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
                Apply now!
            </button>

            <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
                <p>Built with ❤️ by Hana Chae</p>
                <div className="flex -mx-6">
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> |
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> |
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage