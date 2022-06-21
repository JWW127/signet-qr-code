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
      bgColor="white"
      fgColor="#30489a"
      level="H"
    />
  );

  return (
    <div className="flex justify-around flex-wrap p-6 max-h-[1080px] border-4 rounded-md shadow-lg shadow-gray-700 border-gray-500">
      <h1 className="w-full text-center mt-8 font-serif text-bold text-3xl md:text-4xl lg:text-5xl">
        Signet
      </h1>
        <p className="mt-6 text-xl text-center basis-full w-full">{brand}</p>
      <div className="mb-6 mt-6">
        {qr}
      </div>
                {store ? (
          <p className=" text-xl text-center basis-full w-full">Join <span className="text-blue-700 text-bold">{store}</span> Today</p>
        ) : (
          <p className="mt-6 text-center basis-full w-full">Enter Job Location</p>
        )}

      <form className="basis-full md:basis-11/12 lg:basis-11/12 w-full text-center">
        <input
          type="text"
          placeholder="https://example.com"
          onChange={(e) => setUrl(e.target.value)}
          className="border-2 border-gray-300 rounded-sm w-full text-center mb-3"
        />
      </form>
    </div>
  );
};
