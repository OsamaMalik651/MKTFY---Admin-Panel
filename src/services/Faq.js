import axios from "utils/axios-helper";

//Get all the FAQS
const getFaqs = async () => {
    try {
        const response = await axios.get('/faq');
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//Get a single FAQ
const getFaq = async (id) => {
    try {
        const response = await axios.get(`/faq/${id}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//Create a new FAQ
const createFaq = async (faqObject) => {
    try {
        const response = await axios.post('/faq', faqObject);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//Update a FAQ
const updateFaq = async (faqObject) => {
    try {
        const response = await axios.put(`/faq`, faqObject);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export { getFaqs, getFaq, createFaq, updateFaq };