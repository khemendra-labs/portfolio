import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'khemendra-labs',
      name: 'portfolio',
    },
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          description: 'Brief description of the project',
          multiline: true,
        }),
        problem: fields.text({
          label: 'Problem',
          description: 'What problem does this project solve?',
          multiline: true,
        }),
        solution: fields.text({
          label: 'Solution',
          description: 'How does this project solve the problem?',
          multiline: true,
        }),
        technologies: fields.array(
          fields.text({ label: 'Technology' }),
          {
            label: 'Technologies',
            itemLabel: props => props.value,
          }
        ),
        securityArea: fields.text({
          label: 'Security Area',
          description: 'e.g., DFIR, Network Security, Malware Analysis',
        }),
        github: fields.url({ label: 'GitHub URL' }),
        demo: fields.url({
          label: 'Demo URL',
          description: 'Leave empty if no demo available',
        }),
        featured: fields.checkbox({
          label: 'Featured',
          defaultValue: false,
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Active', value: 'Active' },
            { label: 'In Development', value: 'In Development' },
            { label: 'Beta', value: 'Beta' },
            { label: 'Stable', value: 'Stable' },
            { label: 'Deprecated', value: 'Deprecated' },
          ],
          defaultValue: 'Active',
        }),
        date: fields.date({ label: 'Date' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
        }),
      },
    }),
    reports: collection({
      label: 'Reports',
      slugField: 'title',
      path: 'content/reports/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'DFIR', value: 'DFIR' },
            { label: 'Malware', value: 'Malware' },
            { label: 'Security Research', value: 'Security Research' },
          ],
          defaultValue: 'DFIR',
        }),
        summary: fields.text({
          label: 'Summary',
          description: 'Brief summary of the report',
          multiline: true,
        }),
        tools: fields.array(
          fields.text({ label: 'Tool' }),
          {
            label: 'Tools Used',
            itemLabel: props => props.value,
          }
        ),
        cves: fields.array(
          fields.text({ label: 'CVE' }),
          {
            label: 'CVEs',
            itemLabel: props => props.value,
          }
        ),
        references: fields.array(
          fields.text({ label: 'Reference' }),
          {
            label: 'References',
            itemLabel: props => props.value,
          }
        ),
        date: fields.date({ label: 'Date' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
        }),
      },
    }),
    labs: collection({
      label: 'Labs',
      slugField: 'title',
      path: 'content/labs/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        objective: fields.text({
          label: 'Objective',
          description: 'What is the goal of this lab?',
          multiline: true,
        }),
        environment: fields.text({
          label: 'Environment',
          description: 'Tools and setup required',
          multiline: true,
        }),
        methodology: fields.text({
          label: 'Methodology',
          description: 'Steps taken during the lab',
          multiline: true,
        }),
        findings: fields.text({
          label: 'Findings',
          description: 'What was discovered?',
          multiline: true,
        }),
        evidence: fields.text({
          label: 'Evidence',
          description: 'Screenshots, logs, or other evidence',
          multiline: true,
        }),
        lessons: fields.text({
          label: 'Lessons Learned',
          description: 'Key takeaways from this lab',
          multiline: true,
        }),
        date: fields.date({ label: 'Date' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
        }),
      },
    }),
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({
          label: 'Excerpt',
          description: 'Brief summary for the blog listing',
          multiline: true,
        }),
        category: fields.text({
          label: 'Category',
          description: 'e.g., Threat Hunting, Digital Forensics',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value,
          }
        ),
        publishedDate: fields.date({ label: 'Published Date' }),
        readingTime: fields.text({
          label: 'Reading Time',
          description: 'e.g., "8 min read"',
        }),
        coverImage: fields.url({
          label: 'Cover Image URL',
          description: 'Leave empty if no cover image',
        }),
        references: fields.array(
          fields.text({ label: 'Reference' }),
          {
            label: 'References',
            itemLabel: props => props.value,
          }
        ),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
        }),
      },
    }),
  },
})
