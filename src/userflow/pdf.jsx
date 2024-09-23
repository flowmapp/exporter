import React from 'react'
import ReactPDF, { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const HelloWorld = ({ userflow, options }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{userflow.title}</Text>
      </View>
    </Page>
  </Document>
)

export default (userflow, { options } = {}) =>
  ReactPDF.renderToStream(<HelloWorld userflow={userflow} options={options} />)
