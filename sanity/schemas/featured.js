export default {
  name: 'featured',
  title: 'Feature categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'restaurant',
      title: 'Restaurant',
      type: 'array',
      of:[{type:'reference', to:[{type:'restaurants'}]}]
    },
    {
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
    },
  ],
}
