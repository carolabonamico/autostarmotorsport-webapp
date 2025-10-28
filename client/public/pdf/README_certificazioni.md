# How to Add PDF Certifications

This folder contains PDF files of certifications that can be displayed on the website through the CertCard section.

## Instructions for Adding a New Certification

1. **Add the PDF File**
   - Place the certification PDF file in this folder (`public/pdf`).
   - The filename should preferably be descriptive and unique (e.g., `7908_PESPAV-FIRSTNAME_LASTNAME.pdf`).

2. **Update the PDFs Array**
   - Navigate to the file `src/components/Team section/CertCard.jsx`.
   - Update the `pdfs` array by adding a new object with the following properties:

```javascript
{
  title: 'Certification Title',
  desc: 'Description or certificate name',
  file: '/pdf/filename.pdf'
}
```

3. **Display**
   - The PDF will be automatically displayed in the CertCard section of the website.
   - Download is not allowed: PDFs are view-only.

## Example Certification Object

```javascript
{
  title: 'PEI Certification',
  desc: 'Official PEI Certificate - First Last Name',
  file: '/pdf/7909_PEI-FIRSTNAME_LASTNAME.pdf'
}
```

## Notes
- Ensure the file path starts with `/pdf/`.
- For graphic or functional changes, update the `CertCard.jsx` component.
- All PDFs are embedded for viewing only, with download functionality disabled.
- Certifications are displayed in a responsive grid layout on the Team page.
