export default function Footer() {
  return (
    <footer className="bg-darkGrey py-8">
      <div className="container flex align-center justify-between mx-auto">
        <div>
          <h3 className="text-white">Nextmark©</h3>
          <h5 className="text-white text-xs mt-1">Copyright ©2023 Nextmark</h5>
        </div>
        <div className="flex mt-2 cursor-pointer">
          <h3 className="hover:text-orange duration-100 text-lightGrey underline">Facebook</h3>
          <h3 className="hover:text-orange duration-100 text-lightGrey underline mx-8">Instagram</h3>
          <h3 className="hover:text-orange duration-100 text-lightGrey underline">Telegram</h3>
        </div>
        <h3 className="text-white mt-2">by <span className="font-bold">Nextmark</span></h3>
      </div>
    </footer>
  );
}
