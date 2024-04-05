import Navbar from "./Navbar"

function Form(): JSX.Element {

    // 1. personal detail
    // 2. Skills / experiences
    // 3. Upload

    return (
        <div className="p-20 min-h-screen flex flex-col">
            <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase font-black text-blue-600">
                Job Application
            </h1>
            <h2 className="text-1xl md:text-2xl lg:text-2xl mb-8">
                Please complete the form below to apply for a position with us.
            </h2>

            <main className="text-center flex items-center justify-center">

                <form className="p-20 min-h-screen flex flex-col">
                    <Navbar />
                </form>
            </main>

        </div>
    )
}

export default Form
