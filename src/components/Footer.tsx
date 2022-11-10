export const Footer = () => {
  return (
    <footer className="sticky top-[100vh] p-8 bg-black rounded-lg shadow md:px-6 md:py-8 dark:bg-black">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://github.com/JuliaBaranova" className="hover:underline">
          Julia Baranova
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  )
}