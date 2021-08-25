// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const INSTAGRAM_AUTH_CODE = process.env.INSTAGRAM_AUTH_CODE;
    const response = await fetch(`https://graph.instagram.com/4394575313943321/media?fields=id,media_type,media_url,username,timestamp&access_token=${INSTAGRAM_AUTH_CODE}`)
    .then(res => res.json());
    res.status(200).json(response)
  } catch (error) {
    console.log(error);
    res.status(200).json([])
  }
}
