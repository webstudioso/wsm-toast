const block = {
  id: `section-${process.env.MODULE_ID}`,
  media: `
    <a class="relative px-5 py-4 border-r-8 bg-white drop-shadow-lg border-green-600">
      <p class="text-sm">
          Notification!
      </p>
    </a>
  `,
  category: "Toast",
  label: 'Visible during events',
  content: `
    <div id="${process.env.MODULE_ID}" class="hidden fixed right-10 bottom-10 px-5 py-4 border-r-8 bg-white drop-shadow-lg">
        <p class="text-sm">
            Content goes here
        </p>
    </div>
  `
};

export default block;
