export default function Footer() {
  return (
    <footer className="bg-darkGrey py-8">
      <h3 className="text-white text-center text-sm sm:hidden block">Nextmark©</h3>

      <div className="container sm:flex hidden flex align-center justify-between mx-auto">
        <div>
          <h3 className="text-white">Nextmark©</h3>
          <h5 className="text-white text-xs mt-1">Copyright ©2023 Nextmark</h5>
        </div>
        <div className="flex mt-2 xl:text-base lg:text-sm cursor-pointer">
          <a href="https://www.facebook.com/nextmarkuz">
            <h3 className="hover:text-orange duration-100 text-lightGrey underline">Facebook</h3>
          </a>
          <a href="https://instagram.com/nextmark.uz">
            <h3 className="hover:text-orange duration-100 text-lightGrey underline mx-8">Instagram</h3>
          </a>
          <a href="https://t.me/nextmarkuz">
            <h3 className="hover:text-orange duration-100 text-lightGrey underline">Telegram</h3>
          </a>
        </div>
        <h3 className="text-white mt-2">by <span className="font-bold">Nextmark</span></h3>
      </div>
    </footer>
  );
}
