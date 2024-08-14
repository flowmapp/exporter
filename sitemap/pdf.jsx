import React from 'react'
import ReactPDF, { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

const HelloWorld = ({ sitemap, options }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{sitemap.title}</Text>
      </View>
    </Page>
  </Document>
)

export default (sitemap, { options } = {}) =>
  ReactPDF.renderToString(<HelloWorld sitemap={sitemap} options={options} />)
