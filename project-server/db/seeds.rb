puts "Seeding data..."


User.create(username: 'kvank', password: '1234')
User.create(username: 'hyun', password: '5678')
User.create(username: 'fakeaccount12', password: '1111')
User.create(username: 'coder5000', password: '8888')

Bootcamp.create(name: "Simplilearn", image: "https://careerkarma.com/_next/image/?url=https%3A%2F%2Fd1psgljc389n8q.cloudfront.net%2F100x100%2Fbootcamps%2Flogos%2Fbootcamp-logo-simplilearn.jpg&w=128&q=100", description: "Simplilearn is the world's #1 online Bootcamp for digital economy skills training on emerging technologies and processes that are transforming the digital world today. Our efforts as an organization are focused on helping people acquire the skills they need to thrive in the digital economy.")

Bootcamp.create(name: "Flatiron School", image: "https://careerkarma.com/_next/image/?url=https%3A%2F%2Fd1psgljc389n8q.cloudfront.net%2F100x100%2Fbootcamps%2Flogos%2Fbootcamp-logo-flatiron-school.png&w=128&q=100", description: "Flatiron School offers immersive on-campus and online programs in software engineering, data science, cybersecurity, and product design (UX/UI design). Flatiron School’s immersive courses aim to launch students into fulfilling careers by providing a robust career services framework and dedicated one-on-one coaching post graduation that is included as an added value with the tuition.")

Bootcamp.create(name: "App Academy", image: "https://coursereport-production.imgix.net/uploads/school/logo/3/original/logo-emblem-red-1000-1-.jpg?w=70&h=70&dpr=2&q=50", description: "App Academy offers immersive web development courses both online and in-person on campuses in San Francisco and New York City. App Academy’s curriculum is largely based on a hands-on approach. Students spend about 90% of their time pair programming and 10% in lectures, encouraging the sharing of knowledge while also making coding more social.")

Bootcamp.create(name: "Ironhack", image: "https://coursereport-production.imgix.net/uploads/school/logo/84/original/logo-ironhack-blue.png?w=100&h=100&dpr=2&q=50", description: "Ironhack offers full-time and part-time bootcamps in Web Development, UX/UI design, Data Analytics and Cyber Security in Miami (Florida), Madrid and Barcelona (Spain), Paris (France) Mexico City (Mexico), Berlin (Germany), Amsterdam (Netherlands), Sao Paulo (Brazil), Lisbon (Portugal) and remotely.")

Bootcamp.create(name: "Thinkful", image: "https://coursereport-production.imgix.net/uploads/school/logo/29/original/tf-2019-logo-square.png?w=70&h=70&dpr=2&q=50", description: "Thinkful, a Chegg service, provides every adult learner with a pathway to a rewarding career. This online bootcamp offers fast-paced, career-focused programs in Software Engineering, Data Science, Data Analytics, UX/UI Design, Digital Marketing, and Technical Project Management.")

Bootcamp.create(name: "Coding Dojo", image: "https://coursereport-production.imgix.net/uploads/school/logo/84/original/logo-ironhack-blue.png?w=100&h=100&dpr=2&q=50", description: "Founded in 2012, Coding Dojo is a global technology education company that offers three full stack coding bootcamps, full-stack part-time programs, as well as courses on data science and other emerging technologies.")

Bootcamp.create(name: "Codesmith", image: "https://coursereport-production.imgix.net/uploads/school/logo/216/original/white-background.png?w=100&h=100&dpr=2&q=50", description: "Codesmith offers full-time (12-week) and part-time (38-week) immersive software engineering bootcamps in Los Angeles, New York City, and online. Codesmith is a selective, need-blind program focusing largely on computer science and full-stack JavaScript, with an emphasis on technologies like React, Redux, Node, build tools, Dev Ops and machine learning.")




30.times do 
    reviews = ['great', 'wish i learned more', 'very satisfied', 'loved learning here!', 'do in person if you decide to to this bootcamp', 'not satisfied', 'difficult but gratifying', 'did not prepare me for interview process', 'wonderful experienced']
    Review.create(
        star_rating: rand(1..5),
        comment: reviews.sample,
        user_id: User.ids.sample,
        bootcamp_id: Bootcamp.ids.sample
    )
end


