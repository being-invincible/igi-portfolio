import { useEffect, useState } from 'react';

function LandingPage() {
  return (
    <div class="flex h-screen justify-center items-center lg:flex-row bg-gradient-to-r from-pale-purple to-mountain-pink">
      <div class="w-full lg:w-1/2 h-64 mx-auto max-w-lg py-8 px-4 bg-rhythm rounded-md">
        {/*<!-- Your content goes here -->*/}
        <h1>Hello World</h1>
      </div>
      <div class="w-full lg:w-1/2 h-64 mx-auto max-w-lg py-8 px-4 lg:hidden">
        {/*<!-- Your content goes here -->*/}
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default LandingPage;