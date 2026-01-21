import { motion } from 'framer-motion';
import { volunteer } from '../data/content';

const Volunteer = () => {
  return (
    <section id="volunteer" className="section bg-dark">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Volunteer
        </motion.h2>

        <div className="space-y-12">
          {volunteer.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-dark-card rounded-2xl overflow-hidden border border-border group hover:border-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-2/5 relative min-h-[300px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10 opacity-60" />
                  <img 
                    src={item.image} 
                    alt={item.event}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = '/images/volunteer/volunteer5.jpg';
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                      {item.period}
                    </span>
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs text-text-muted bg-dark/50 rounded-full border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-lg text-primary font-medium mb-6">
                    {item.event}
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-3">
                    {item.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start gap-3 text-sm text-text-muted"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
