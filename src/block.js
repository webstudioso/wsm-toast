const block = {
  id: `section-${process.env.MODULE_ID}`,
  media: `
    <div class="px-5 py-4 border-r-8 drop-shadow-lg success text-white border-green-600 bg-green-600">
      <p class="text-sm">
          Notification toast!
      </p>
    </div>
  `,
  category: "Toast",
  label: 'Event notifications',
  content: `
    <div id="${process.env.MODULE_ID}" class="hidden fixed right-10 bottom-10 px-5 py-4 border-r-8 bg-white drop-shadow-lg">
        <p class="text-sm">
            Content goes here
        </p>
    </div>
  `
};

export default block;
