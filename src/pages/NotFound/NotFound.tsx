import notfound from "../../assets/svg/notfound.svg"

export const NotFound = () => {
  return (
    <section>
      <div className="bg-black text-white">
        <div className="flex h-screen">
          <div className="m-auto text-center">
            <div>
              <img src={notfound} alt="notfound" />
            </div>
            <p className="text-sm md:text-base text-yellow-300 p-2 mb-4">
              The stuff you were looking for doesn't exist
            </p>
            <a
              href="/"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Retry
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
