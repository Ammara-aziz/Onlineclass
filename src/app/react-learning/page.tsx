import MyButton from "@/components/myButton";
import AboutPage from "@/components/markupwithJSX";
import Displaydata from "@/components/Displaydata";

function MyButton2() {
    return (
        <button className="p-2 bg-orange-500 rounded-lg">I'm a Button2 </button>
    );
};
const ReactLearning = () => {
    return (
        <div className="flex flex-col gap-3">
            React Learning
            <div>
                Create a component
                <h1 className="font-bold text-orange-700">Welcome to My App</h1>
                <div className="flex gap-2 py-2">
                    <MyButton />
                    <div>
                        <MyButton2 />
                     </div>
                </div>
            </div>
            <div>
                <p className="tex-sm font-semibold">MarkUp With JSX</p>
                <AboutPage />
            </div>
            <div>
                Adding Styles
                <p className="text-sm font-semibold">
                    In React, you specify a css class with className.
                    way as the html class attribute:
                </p>
            </div>
            <div>Display Data
                <Displaydata/>
            </div>
        </div>


    )
};
export default ReactLearning;