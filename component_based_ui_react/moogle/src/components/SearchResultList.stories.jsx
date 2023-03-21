import React from "react";

import SearchResultList from "./SearchResultList";

export default {
  title: "Moogle/SearchResultList",
  component: SearchResultList,
};

const Template = (args) => <SearchResultList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  results: [
    {
      name: "Ayrshire",
      image:
        "https://cdn.agronomag.com/wp-content/uploads/2022/08/Ayrshire-cow.jpg",
      tags: ["chonker", "dairy", "hungry"],
      description:
        "The Ayrshire is by far one of the largest cattle breeds out there, making it a great choice for those that want to get the best of both worlds in terms of amazing milk quality and delicious meat at the end of its partnership with you. You can get a lot of milk from it, but what's really cool about this breed is the fact that it can grow as large as 900 to 1,300 pounds in total. Just keep in mind that the larger size is also attributed to the huge quantities of food that you’ll have to feed it. So, if you can handle the food price you won’t have any problems raising your very own Ayrshire cow today.",
    },
    {
      name: "Angus",
      image:
        "https://cdn.agronomag.com/wp-content/uploads/2022/08/White-angus-cows.jpg",
      tags: ["chonker", "dairy", "tempermental"],
      description:
        "No matter where you look, everyone’s seen their own Angus Cattle at least once during their lifetime and that’s a fact. This is due to the fact that this is one of the most popular breeds out there because they weight a lot and also produce a lot of milk. The standard Angus bull can weigh in as much as 1,800lbs, and if that wasn’t enough, you can also get your money’s worth from a slightly smaller cow that will weigh in at around 1,200lbs or so. You’ve all heard about black angus and probably red angus, but did you know they’re white as well? The only real issue with this cattle breed is the fact that they can’t handle heat too well and they are also known for being rather temperamental when slightly inconvenienced.  ",
    },
    {
      name: "Brahman",
      image:
        "https://cdn.agronomag.com/wp-content/uploads/2022/08/Brahman-cow.jpg",
      tags: ["popular", "hump", "hardy"],
      description:
        "Originally from India, this cattle breed can be found around every corner, being one of the most popular breeds in the world right now. The key selling point for Brahman cattle is the fact that they are extremely hardy creatures, able to resist pests, parasites and even certain diseases that would take out most other breeds. They have also been developed to survive with inadequate food, making this a great choice for those that don’t want to have to be super consistent with their feeding schedule. You can tell if you’re dealing with a Brahman cattle by simply checking out the massive hump over its shoulder and neck, and of course, the upward-curving horns that are a staple of this breed.",
    },
  ],
};
