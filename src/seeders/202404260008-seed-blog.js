'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blog', [
      {
        blog_name: 'The Rise of AI',
        description: 'How AI is changing the future.',
        content: 'Artificial Intelligence (AI) is no longer a futuristic concept confined to science fiction. Its a rapidly evolving technology transforming industries and impacting our daily lives in profound ways.  From healthcare and finance to transportation and entertainment, AI is automating tasks, predicting outcomes, and personalizing user experiences. Machine learning algorithms are enabling computers to learn from data without explicit programming, leading to breakthroughs in image recognition, natural language processing, and robotics. The development of AI raises important ethical considerations, including bias in algorithms, job displacement, and the potential for misuse. Navigating these challenges requires careful planning and collaboration between researchers, policymakers, and the public to ensure AI benefits humanity as a whole.  The ongoing progress in AI research suggests that its influence will only continue to grow in the coming years, shaping the future of work, society, and our understanding of intelligence itself.',
        image_url: 'https://www.shutterstock.com/image-photo/digital-brain-circuit-ai-cocept-600nw-2498421665.jpg',
        category_id: 1,
        created_by: 1,
        updated_by: null,
        date: new Date(),
        is_deleted: false
      },
      {
        blog_name: 'Top 10 Health Tips',
        description: 'Simple and effective ways to stay healthy.',
        content: 'Maintaining a healthy lifestyle is essential for physical and mental well-being.  Here are ten simple yet effective tips to incorporate into your daily routine: 1. Eat a balanced diet rich in fruits, vegetables, and whole grains. 2. Stay hydrated by drinking plenty of water throughout the day. 3. Engage in regular physical activity, such as brisk walking, jogging, or swimming, for at least 30 minutes most days of the week. 4. Get adequate sleep, aiming for 7-8 hours per night. 5. Manage stress through relaxation techniques like meditation, yoga, or deep breathing exercises. 6. Avoid smoking and excessive alcohol consumption. 7. Get regular check-ups with your doctor and dentist. 8. Practice good hygiene, including washing your hands frequently. 9. Protect your skin from the sun by wearing sunscreen and protective clothing. 10. Cultivate positive relationships and social connections.  By following these tips, you can improve your overall health and well-being and live a longer, healthier life.',
        image_url: 'https://www.shutterstock.com/image-photo/clinic-tablet-hands-doctor-patient-260nw-2472677039.jpg',
        category_id: 2,
        created_by: 2,
        updated_by: null,
        date: new Date(),
       
        is_deleted: false
      },
      {
        blog_name: 'Blockchain Beyond Cryptocurrency',
        description: 'Exploring blockchain applications outside Bitcoin.',
        content: 'While blockchain technology is often associated with cryptocurrencies like Bitcoin, its potential extends far beyond digital currencies.  Blockchain is a distributed, decentralized, and immutable ledger that can be used to record and verify transactions in a secure and transparent manner. This makes it suitable for a wide range of applications in various industries.  In supply chain management, blockchain can track products from origin to delivery, ensuring authenticity and preventing counterfeiting.  In voting systems, blockchain can provide a tamper-proof and auditable record of votes, enhancing election integrity.  In healthcare, blockchain can securely store and share patient medical records, improving data interoperability and patient privacy.  In real estate, blockchain can streamline property transactions, reduce fraud, and lower transaction costs.  The versatility of blockchain technology makes it a promising solution for addressing challenges in many different sectors, paving the way for increased efficiency, transparency, and trust in various processes.',
        image_url: 'https://www.shutterstock.com/image-illustration/top-7-cryptocurrency-tokens-by-600nw-2152214777.jpg',
        category_id: 1,
        created_by: 1,
        updated_by: null,
        date: new Date(),
       
        is_deleted: false
      },
      {
        blog_name: 'Mental Health Matters',
        description: 'Awareness and importance of mental health.',
        content: "Mental health is an integral component of overall well-being, encompassing our emotional, psychological, and social states. It influences how we think, feel, and behave, affecting our ability to cope with stress, relate to others, and make choices.  Prioritizing mental health is crucial for individuals of all ages and backgrounds.  There are numerous ways to take care of our mental well-being, including: seeking professional help when needed, practicing mindfulness and meditation, engaging in regular physical activity, maintaining supportive relationships, setting realistic goals, and prioritizing self-care activities. It's important to remember that seeking help for mental health challenges is a sign of strength, not weakness.  By raising awareness about mental health and promoting access to resources and support, we can break down stigma and create a more compassionate and understanding society where everyone feels empowered to prioritize their mental well-being.",
        image_url: 'https://www.shutterstock.com/image-vector/your-mental-health-wealth-260nw-2501768209.jpg',
        category_id: 2,
        created_by: 2,
        updated_by: null,
        date: new Date(),
       
        is_deleted: false
      },
      {
        blog_name: 'The Future of Space Exploration',
        description: 'Private companies leading space missions.',
        content: "Space exploration is undergoing a transformative period, with private companies playing an increasingly significant role.  Companies like SpaceX, Blue Origin, and Virgin Galactic are pushing the boundaries of space technology and innovation, driving down costs and opening up new possibilities for space travel and research.  SpaceX aims to colonize Mars and establish a self-sustaining human settlement on the Red Planet. Blue Origin is developing reusable launch vehicles and lunar landers to support future lunar missions.  NASA is partnering with private companies to develop new technologies and explore the solar system.  These advancements are paving the way for a new era of space exploration, with the potential to unlock valuable resources, expand our understanding of the universe, and inspire future generations of scientists and engineers. The future of space exploration is bright, with private companies leading the charge and transforming our vision of what's possible.",
        image_url: 'https://cdn.mos.cms.futurecdn.net/AoWXgnHSxAAPxqymPQMQYL-1200-80.jpg',
        category_id: 1,
        created_by: 1,
        updated_by: null,
        date: new Date(),
      
        is_deleted: false
      },
      {
        blog_name: 'Sustainable Living: Tips for a Greener Life',
        description: 'Practical ways to reduce your environmental footprint.',
        content: 'Sustainable living is about making conscious choices that minimize our impact on the planet and ensure a healthy environment for future generations. It involves adopting eco-friendly habits in various aspects of our lives, from reducing waste and conserving resources to supporting sustainable businesses and advocating for environmental policies. Here are some practical tips to live more sustainably:  1. Reduce waste by recycling, composting, and avoiding single-use plastics. 2. Conserve water by taking shorter showers, fixing leaks, and using water-efficient appliances. 3. Conserve energy by turning off lights when leaving a room, using energy-efficient appliances, and insulating your home. 4. Choose sustainable transportation options, such as walking, biking, or using public transportation. 5. Support local and sustainable businesses that prioritize environmental responsibility. 6. Reduce your consumption of meat and dairy products, which have a significant environmental impact. 7. Advocate for environmental policies and support organizations that are working to protect the planet. By adopting these sustainable living practices, we can collectively create a healthier and more sustainable future for all.',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uFqM-8i1AN9Vm2HFaHnmUSSj7PydzbWAxw&s',
        category_id: 3, // Assuming category_id 3 represents "Environment" or a similar category
        created_by: 3, // Assuming created_by user_id 3
        updated_by: null,
        date: new Date(),
       
        is_deleted: false
      },
      {
        blog_name: 'The Art of Photography',
        description: 'Mastering composition, lighting, and editing techniques.',
        content: "Photography is more than just pointing and shooting; it's about capturing moments, telling stories, and expressing your unique perspective. Mastering the art of photography requires understanding fundamental principles such as composition, lighting, and editing. Composition involves arranging the elements within the frame to create a visually appealing image. Techniques like the rule of thirds, leading lines, and symmetry can enhance the impact of your photos. Lighting plays a crucial role in shaping the mood and atmosphere of your images. Understanding how to use natural light, artificial light, and different lighting techniques can elevate your photography. Editing is an essential part of the photographic process, allowing you to refine your images, correct imperfections, and enhance their overall impact. Software like Adobe Photoshop and Lightroom offer a wide range of tools for editing photos. By mastering these core principles, you can transform your photos from ordinary snapshots into stunning works of art.",
        image_url: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category_id: 4, // Assuming category_id 4 represents "Arts & Culture"
        created_by: 4,
        updated_by: null,
        date: new Date(),
        
        is_deleted: false
      },
      {
        blog_name: 'The Benefits of Meditation',
        description: 'How meditation can improve your mental and physical well-being.',
        content: "Meditation is a practice that involves training the mind to focus and quiet the stream of thoughts. It has been practiced for centuries across various cultures and traditions, and its benefits for mental and physical well-being are well-documented. Regular meditation can reduce stress, enhance focus, improve sleep quality, and promote emotional well-being. By practicing mindfulness and relaxation techniques, individuals can cultivate a greater sense of self-awareness and inner peace. There are various types of meditation, including mindfulness meditation, loving-kindness meditation, and transcendental meditation. Each type offers unique benefits, and individuals can choose the type that resonates with them the most. Starting a meditation practice can be as simple as setting aside a few minutes each day to focus on your breath and quiet your mind. With consistent practice, meditation can transform your life and enhance your overall well-being.",
        image_url: 'https://cdn.tinybuddha.com/wp-content/uploads/2013/07/Meditating-1.jpg',
        category_id: 2, // Health & Wellness
        created_by: 2,
        updated_by: null,
        date: new Date(),
       
        is_deleted: false
      },
      {
        blog_name: 'Effective Time Management Strategies',
        description: 'Maximize productivity and achieve your goals.',
        content: "Time management is a crucial skill for maximizing productivity and achieving your goals. It involves planning, organizing, and prioritizing tasks to make the most of your time. Effective time management strategies can help you reduce stress, improve focus, and achieve a better work-life balance. Here are some time management tips: 1. Prioritize tasks based on their importance and urgency. 2. Set realistic deadlines for completing tasks. 3. Break down large tasks into smaller, more manageable steps. 4. Eliminate distractions, such as social media and email notifications. 5. Delegate tasks when possible. 6. Use time management tools, such as calendars, to-do lists, and project management software. 7. Take regular breaks to avoid burnout. By implementing these time management strategies, you can optimize your workflow, achieve better results, and create more time for the things that matter most.",
        image_url: 'https://img.freepik.com/premium-photo/caucasian-businessman-showing-clock-time-management_220873-7701.jpg',
        category_id: 5,  // Assuming 5 is "Productivity/Business"
        created_by: 5,
        updated_by: null,
        date: new Date(),
        
        is_deleted: false
      },
      {
        blog_name: 'Exploring Culinary Delights: A Foodie Adventure',
        description: 'Discovering the world\'s best cuisines and food experiences.',
        content: "For food lovers, exploring culinary delights is more than just eating; it's a journey of discovery through different cultures and traditions. Each cuisine has its own unique history, flavors, and ingredients, offering a glimpse into the soul of a culture. A foodie adventure can take you to bustling street food markets, elegant restaurants, and hidden culinary gems around the world.  From the spicy flavors of Thai cuisine to the delicate artistry of Japanese sushi, each culinary experience offers a unique sensory adventure. Exploring local markets and trying regional specialties can provide a deeper understanding of a culture's food heritage. Cooking classes can offer hands-on experience in preparing traditional dishes. By embracing culinary diversity, we can broaden our horizons, expand our palates, and create unforgettable memories.",
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/960px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
        category_id: 6,   // Assumming 6 is "Food & Travel"
        created_by: 6,
        updated_by: null,
        date: new Date(),
        
        is_deleted: false
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blog', null, {});
  }
};