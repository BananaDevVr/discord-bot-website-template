import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const commands = {
  utilities: [
    { command: "!setwelcomechannel", description: "Set the welcome channel for the server." },
    { command: "!getsettings", description: "Get the current server settings." },
    // Add more utility commands as needed
  ],
  fun: [
    { command: "!rps", description: "Play rock-paper-scissors with the bot." },
    // Add more fun commands as needed
  ],
  customization: [
    // Add customization commands here
  ],
  gameplay: [
    // Add gameplay commands here
  ],
  image: [
    // Add image commands here
  ],
};

export default function Commands() {
  return (
    <>
      <Head>
        <title>Commands | BOT</title>
        {/* ... (Your existing Head content) */}
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          {Object.entries(commands).map(([category, commandList]) => (
            <React.Fragment key={category}>
              <input type="radio" name="accordion" id={`cb${category}`} />
              <section className="box">
                <label className="box-title p-color" htmlFor={`cb${category}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)} ⚙️
                </label>
                <label className="box-close" htmlFor="acc-close"></label>
                <div className="box-content p-color">
                  <ul>
                    {commandList.map(({ command, description }) => (
                      <li key={command}>
                        <kbd>{command}</kbd> - <span className="p-color">{description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </React.Fragment>
          ))}
          {/* ... (Other categories) */}
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </>
  );
}
