import { Section } from '../components/Section'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Harendra Chhekur',
    title: 'Project Lead · TalenBox Labs',
    quote: "Mandar was really good at backend development, specifically fundamentals and basics. He is pretty quick in figuring out solutions, once he gets the problem he comes up the solution pretty quickly. It was awesome working with him.",
    source: 'LinkedIn',
    avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQFHWbzTv7XC9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1593336821666?e=1761782400&v=beta&t=vv1LXazzT8f8FwgQKoUqGIXMRxNLlobpsVn_g33PXHY',
  },
  {
    name: 'Karan Singh',
    title: 'Sr. Engineering Manager · Microsoft',
    quote: "Mandar's work during his Microsoft internship was truly impressive. Not only did he consistently deliver with precision, collaborate effectively, and show a proactive approach, but his exceptional ability to learn quickly and adapt was a standout quality. Mandar's strong backend development skills and swift problem-solving made him an exceptional asset to the team. His proactive approach to seeking and implementing feedback speaks volumes about his dedication to continuous improvement.",
    source: 'LinkedIn',
    avatar: 'https://media.licdn.com/dms/image/v2/C4D03AQGkQCbIv0TKkQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1625400543133?e=1761782400&v=beta&t=9qfHeuYNAKfL6td_B12foc0dglVT647ElITgKdjHz5Y',
  },
  {
    name: 'Palash Chaturvedi',
    title: 'Senior Engineer · Microsoft',
    quote: "I worked with Mandar during his internship at Microsoft, and I highly recommend him. Mandar consistently delivered with precision and efficiency. His collaborative and proactive nature made him a valuable asset to our team. He was always willing to go an extra mile to support his colleagues and contribute to the overall success of our projects. His dedication to quality, adaptability, and excellent communication skills make him a standout candidate for any team. Mandar's contributions were invaluable, and I'm confident he will excel in any future endeavour.",
    source: 'LinkedIn',
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHyioA5MqoU-A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693818031568?e=1761782400&v=beta&t=7PX04Ws-8l9uOGMXr_pbLQu5XuASytuxR8__U20h4eU',
  },
  {
    name: 'Anthony Martin',
    title: 'Principal Software Engineer Manager · Microsoft',
    quote: 'Your changes are efficient and easy to review!',
    source: 'PR review comment',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg',
  },
  {
    name: 'Inka Strotmann',
    title: 'Product Manager · Monotype',
    quote: "I worked with Mandar in my role as Product Manager at Monotype, where he is part of our agile Scrum team building features for a B2B platform. He contributed across backend and frontend and was a driving force behind developing our first AI tool for customers. His curiosity, problem-solving skills, and sharp questions consistently helped us discover better solutions. What stood out most for me was his reliability. He always delivered, was proactive in product discovery and refinement, and raised ideas that made our features stronger. That rare mix of curiosity and dependability makes him an exceptional team member. Any company looking for a developer with full-stack skills, AI experience, and the ability to thrive in agile environments will find Mandar a great asset.",
    source: 'LinkedIn',
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQEBIVLaxHBU7w/profile-displayphoto-scale_100_100/B4EZl7.MYrKoAc-/0/1758721531945?e=1762387200&v=beta&t=10hzJl5d59XHpxzxc4n_uXFeiNVHNvwlu38hIG5L-J0',
  }
]

export default function Testimonials() {
  return (
    <Section title="Recommendations" subtitle="From LinkedIn & peers">
      <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 min-w-max pr-2 animate-[scrollX_35s_linear_infinite]">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={t.name} 
              initial={{ opacity: 0, y: 8 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.4, delay: idx * 0.05 }} 
              className="w-96 shrink-0 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/5 dark:bg-white/5 p-4 flex gap-4 hover:opacity-95 transition"
            >
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="text-sm opacity-80">"{t.quote}"</div>
                <div className="mt-2 text-sm font-medium">{t.name}</div>
                <div className="text-xs opacity-70">{t.title} • <span className="accent-text">{t.source}</span></div>
              </div>
            </motion.div>
          ))}
          {testimonials.map((t, idx) => (
            <motion.div 
              key={t.name + '-dup'} 
              initial={{ opacity: 0, y: 8 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.4, delay: idx * 0.05 }} 
              className="w-96 shrink-0 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/5 dark:bg-white/5 p-4 flex gap-4 hover:opacity-95 transition"
            >
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="text-sm opacity-80">"{t.quote}"</div>
                <div className="mt-2 text-sm font-medium">{t.name}</div>
                <div className="text-xs opacity-70">{t.title} • <span className="accent-text">{t.source}</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}


