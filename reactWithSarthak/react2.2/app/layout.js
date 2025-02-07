import  MyContext  from "@/Helper/Context";
import "./globals.css";
import Header from "@/Components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <MyContext>
          <Header/>
          {children}
        </MyContext> 
      </body>
    </html>
  );
}
