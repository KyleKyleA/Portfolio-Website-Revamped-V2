// Author: Kyle Angeles
// File: NotFound.jsx
// Date-Written: 4/29/26
// File: This section would display a 404 page if the user ran into any issues navigating throughout the website.

function NotFound() {


    return (
        <main className="grid min-h-full place-items-center bg-grey-900 px 6 py 24 sm:py32 lg:px-8">
        <div className="text-center">

        <p className="text-base font-semi-bold text-red-400">404</p>

        <p className="mt-6 text-lg font-medium text-pretty text-grey md:text-xl/8">
            Sorry, we couldn't find the resource that your looking for please try again next time.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">

                Go back to home page
            </a>
        </div>

        </div>    

        
        </main>

    )
}

export default NotFound;