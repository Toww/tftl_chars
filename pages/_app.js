import "styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto my-4">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
