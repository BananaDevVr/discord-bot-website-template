import Link from "next/link";

const JoinNow = () => {
  // Replace 'YOUR_INVITE_LINK' with the actual invite link
  const inviteLink = 'https://discord.com/api/oauth2/authorize?client_id=1193383659122741291&permissions=8&scope=bot';

  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite our bot to your Discord server!
        </div>
        <button className="btn">
          {/* Use the Link component to create a link to the invite */}
          <Link href={inviteLink}>
            {/* Add styling and text for the link */}
            <a className="h-color no-decoration">Invite now!</a>
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
