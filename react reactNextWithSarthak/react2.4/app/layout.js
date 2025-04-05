import  MyContext  from "@/Helper/Context";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
       
        <MyContext>
          {children}
        </MyContext>
        
      </body>
    </html>
  );
}
