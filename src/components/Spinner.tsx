import spinner from "../assets/svg/spinner.svg"


export const Spinner =()=>{
    return (
        <div className="flex justify-center items-center fixed m-auto top-0 left-0 bottom-0 right-0">
          <img  alt="spin" src={spinner} />
        </div>
    )
}