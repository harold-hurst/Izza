export default function Modal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <button
        id="modalCloseButton"
        onClick={closeModal}
        className="absolute top-6 right-8 text-white text-lg font-bold px-8 py-4 cursor-pointer bg-black md:bg-transparent"
        aria-label="Close modal"
      >
        Close
      </button>
      <div className="md:w-[60vw] md:h-[80vh] w-full h-full">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.9254597722654!2d-1.1339286902650432!3d52.63915745447631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7314784b68c14c0!2sUn.titled!5e0!3m2!1sen!2suk!4v1575994684235!5m2!1sen!2suk"
          className="w-full h-full border-0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}
