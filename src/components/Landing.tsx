import QRCode from "react-qr-code";
import { useState } from "react";
export const Landing = () => {
  const [url, setUrl] = useState("");

  const store = url.toString().split("---")[1];
  const brand = url.toString().split("---")[3];

  const qr = (
    <QRCode
      id="qrCodeElToRender"
      size={256}
      style={{ height: "auto", width: "100%", margin: "0 auto" }}
      value={url}
      bgColor="#fcfcef"
      fgColor="#30489a"
      level="H"
    />
  );

  return (
    <div className="flex justify-around flex-wrap p-6 max-h-[1080px] bg-[#fcfcef] border-4 rounded-md shadow-lg shadow-gray-700 border-gray-500">
      <h1 className="w-full mt-8 font-serif text-5xl text-center underline text-bold lg:text-5xl">
        SIGNET
      </h1>
        <p className="font-serif text-2xl">Jewelers</p>
      <p className="w-full mt-6 text-xl text-center basis-full">{brand}</p>
      <div className="mt-6 mb-6">{qr}</div>
      {store ? (
        <p className="w-full text-xl text-center basis-full">
          Join <span className="text-blue-700 text-bold">{store}</span> Today
        </p>
      ) : (
        <p className="w-full mt-6 text-center basis-full">Enter Job Location</p>
      )}

      <form className="w-full text-center basis-full md:basis-11/12 lg:basis-11/12">
        <input
          type="text"
          placeholder="https://example.com"
          onChange={(e) => setUrl(e.target.value)}
          className="w-full mb-3 text-center border-2 border-gray-300 rounded-sm"
        />
      </form>
    </div>
  );
};
