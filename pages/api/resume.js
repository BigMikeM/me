// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res
    .status(200)
    .json({
      name: 'Michael Maurer',
      profession: 'Software Engineer',
      email: 'maumike87@gmail.com',
      github: 'github.com/BigMikeM',
      linkedIn: 'linkedin.com/in/BigMikeM'
    })
}
