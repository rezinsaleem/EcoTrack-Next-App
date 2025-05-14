// import { NextResponse } from 'next/server';

// export async function POST(req) {
//   try {
//     const { message } = await req.json();

//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: 'gpt-3.5-turbo',
//         messages: [{ role: 'user', content: message }],
//         temperature: 0.7,
//       }),
//     });

//     const data = await response.json();

//     // Debug log the full response
//     console.log('OpenAI API response:', JSON.stringify(data, null, 2));

//     const reply = data.choices?.[0]?.message?.content;

//     return NextResponse.json({
//       reply: reply || 'Sorry, I could not understand that.',
//     });

//   } catch (error) {
//     console.error('Error with OpenAI API:', error);
//     return NextResponse.json({ reply: 'There was an error processing your request.' });
//   }
// }




import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();
    const userInput = message.toLowerCase().trim();

    let reply = "Sorry, I couldn't understand that. Can you please rephrase?";

    if (userInput.includes('sell')) {
      reply = "To sell your license, click the 'Sell My License' button and upload the license file or key. We’ll review and get back with a valuation.";
    } else if (userInput.includes('quote')) {
      reply = "Getting a quote is quick! Just upload your license and we'll send a valuation within 24 hours.";
    } else if (userInput.includes('how') && userInput.includes('work')) {
      reply = "Here's how it works: 1) Upload your license. 2) We evaluate its market value. 3) You get paid via your preferred method.";
    } else if (userInput.includes('payment') || userInput.includes('paid')) {
      reply = "We offer secure payment options including bank transfer, UPI, and PayPal. You'll get paid once the license is verified.";
    } else if (userInput.includes('license type')) {
      reply = "We accept licenses for software like Adobe, Microsoft, Autodesk, and more. If you’re unsure, just ask!";
    } else if (userInput.includes('trusted') || userInput.includes('secure')) {
      reply = "Absolutely. SoftSell is fully compliant with software resale regulations and ensures secure, private transactions.";
    } else if (userInput.includes('testimonial') || userInput.includes('reviews')) {
      reply = "Our customers love us! 98% of our sellers receive offers within a day and report a smooth selling experience.";
    } else if (userInput.includes('contact') || userInput.includes('support')) {
      reply = "You can reach us through the contact form at the bottom of the page or email support@softsell.com.";
    } else if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('hey')) {
      reply = "Hello! 👋 I'm SoftBot. Ask me anything about selling your software licenses.";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Mock chat error:', error);
    return NextResponse.json({ reply: 'There was an error processing your request.' });
  }
}
