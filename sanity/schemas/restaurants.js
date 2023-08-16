export default {
  name: 'restaurants',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latittude of the restaurant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Address of Restaurant',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Enter the rating (1-5)',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    },
    {
        name:'type',
        title:'Category',
        validation:(Rule)=>Rule.required(),
        type:'reference',
        to:[{type:'category'}]
    },
    {
        name:'dishes',
        title:'Dishes',
        type:'array',
        of:[{type:'reference', to:[{type:'dish'}]}]
    }
  ],
}
