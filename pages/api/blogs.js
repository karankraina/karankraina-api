// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 'let-vs-const',
      title: "let vs const vs var",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel odales  efficitur et. Praesent vel risus ex.  leo , scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio  bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus   quis non nisl. Donec in consectetur , sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies.",
      content: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel odales  efficitur et. Praesent vel risus ex.  leo , scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio  bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus   quis non nisl. Donec in consectetur , sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel odales  efficitur et. Praesent vel risus ex.  leo , scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio  bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus   quis non nisl. Donec in consectetur , sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies.",
          image: "/assets/karan-raina.jpg"
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel odales  efficitur et. Praesent vel risus ex.  leo , scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio  bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus   quis non nisl. Donec in consectetur , sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel odales  efficitur et. Praesent vel risus ex.  leo , scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio  bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus   quis non nisl. Donec in consectetur , sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies.",
        }
      ],
      author: "Karan Raina",
      publishedDate: "August 21, 2021"
    },
    {
      id: 'template-iteral',
      title: "What is a template literal ? 🤔",
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nunc vel neque pretium mattis nec ut quam. Morbi porttitor diam neque, vel sodales erat efficitur et. Praesent vel risus ex. Nullam leo enim, scelerisque vel convallis sed, aliquet sit amet purus. Aliquam quis auctor augue. Duis tristique id odio a bibendum. Morbi quis diam faucibus, convallis arcu in, condimentum augue. Donec quis turpis et metus finibus fermentum quis non nisl. Donec in consectetur libero, sed lacinia nibh. Donec auctor non est id semper. Ut vitae interdum quam, et molestie urna. Aenean efficitur vestibulum elit et ultricies.",
      content: [
        {
          text: "Some pararaph 2 text here",
          image: ""
        }
      ],
      author: "Karan Raina",
      publishedDate: "August 21, 2021"
    }
  ])
}
