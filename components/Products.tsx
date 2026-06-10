'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Zap, TrendingUp } from 'lucide-react'
import type { Product } from '@/types/portfolio'

interface ProductsProps {
  products: Product[]
}

export default function Products({ products }: ProductsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Product Portfolio</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Products I've owned end-to-end from discovery through go-to-market launch, serving thousands of users globally.
          </p>
        </motion.div>

        {/* Featured Product */}
        {products.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                    {products[0]?.name}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                    {products[0]?.description}
                  </p>
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Problem</h4>
                      <p className="text-slate-600 dark:text-slate-400">{products[0]?.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Solution</h4>
                      <p className="text-slate-600 dark:text-slate-400">{products[0]?.opportunity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-3xl font-bold text-servicenow-600 dark:text-servicenow-400">
                        {products[0]?.users}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Users Served</div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Features */}
                  <motion.div variants={itemVariants} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {products[0]?.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <Zap size={14} className="text-servicenow-600 flex-shrink-0 mt-0.5" />
                          <span>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* KPIs */}
                  <motion.div variants={itemVariants} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Impact Metrics</h4>
                    <ul className="space-y-2">
                      {products[0]?.kpis.slice(0, 3).map((kpi, i) => (
                        <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <TrendingUp size={14} className="text-servicenow-600 flex-shrink-0 mt-0.5" />
                          <span>{kpi}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Product Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.slice(1).map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow h-full flex flex-col"
              whileHover={{ y: -8 }}
            >
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                  {product.subtitle}
                </p>

                <div className="space-y-3">
                  {/* Users */}
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={16} className="text-servicenow-600" />
                    <span className="text-slate-600 dark:text-slate-400">{product.users} users</span>
                  </div>

                  {/* Features Count */}
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-servicenow-50 dark:bg-servicenow-950 text-servicenow-700 dark:text-servicenow-300 px-2 py-1 rounded"
                      >
                        {feature.name}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 px-2 py-1">
                        +{product.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700">
                <button className="inline-flex items-center gap-2 text-servicenow-600 dark:text-servicenow-400 font-medium hover:gap-3 transition-all text-sm group">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
