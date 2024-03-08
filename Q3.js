
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        let valid = true;
        let email = document.getElementById('email');
        if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address.');
            scrollToElement(email);
            valid = false;
        } else {
            hideError(email);
        }

        let phoneNumber = document.getElementById('phone_number');
        if (!validatePhoneNumber(phoneNumber.value)) {
            showError(phoneNumber, 'Please enter a valid phone number.');
            scrollToElement(phoneNumber);
            valid = false;
        } else {
            hideError(phoneNumber);
        }

        let zipCode = document.getElementById('zip_code');
        if (!validateZipCode(zipCode.value)) {
            showError(zipCode, 'Please enter a valid zip code.');
            scrollToElement(zipCode);
            valid = false;
        } else {
            hideError(zipCode);
        }

       
        if (valid) {
        
            logFormData();
        }
    });

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePhoneNumber(phoneNumber) {
        let regex = /^03\d{9}$/;
        return regex.test(phoneNumber);
    }

    function validateZipCode(zipCode) {
        let regex = /^\d{5}$/;
        return regex.test(zipCode);
    }

    function showError(input, message) {
        let errorElement = input.nextElementSibling; 

        if (!errorElement || !errorElement.classList.contains('error')) {
            errorElement = document.createElement('div');
            errorElement.className = 'error';
            input.parentNode.insertBefore(errorElement, input.nextElementSibling);
            errorElement.style.color = 'red';
        }
        
        errorElement.innerText = message;
    }

    function hideError(input) {
        let errorElement = input.nextElementSibling;

        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.remove();
        }
    }

    function scrollToElement(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function logFormData() {
       
        console.log({
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            phone_number: document.getElementById('phone_number').value,
            email: document.getElementById('email').value,
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip_code: document.getElementById('zip_code').value,
            resume: document.getElementById('resume').files[0],
            cover_letter: document.getElementById('cover_letter').value,
            education_level: document.getElementById('education_level').value,
            school_name: document.getElementById('school_name').value,
            major: document.getElementById('major').value,
            graduation_year: document.getElementById('graduation_year').value,
            previous_job_titles: document.getElementById('previous_job_titles').value,
            company_names: document.getElementById('company_names').value,
            employment_dates: document.getElementById('employment_dates').value,
            job_responsibilities: document.getElementById('job_responsibilities').value,
            relevant_skills: document.getElementById('relevant_skills').value,
            certifications: document.getElementById('certifications').value,
            start_date: document.getElementById('start_date').value,
            preferred_schedule: document.getElementById('preferred_schedule').value,
            relocate: document.getElementById('relocate').value,
            reference_name: document.getElementById('reference_name').value,
            reference_contact: document.getElementById('reference_contact').value,
            relationship: document.getElementById('relationship').value,
            why_work: document.getElementById('why_work').value,
            
        });
    }

    function processData() {
       
        const formData = {
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            phone_number: document.getElementById('phone_number').value,
            email: document.getElementById('email').value,
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip_code: document.getElementById('zip_code').value,
            resume: document.getElementById('resume').value,
            cover_letter: document.getElementById('cover_letter').value,
            education_level: document.getElementById('education_level').value,
            school_name: document.getElementById('school_name').value,
            major: document.getElementById('major').value,
            graduation_year: document.getElementById('graduation_year').value,
            previous_job_titles: document.getElementById('previous_job_titles').value,
            company_names: document.getElementById('company_names').value,
            employment_dates: document.getElementById('employment_dates').value,
            job_responsibilities: document.getElementById('job_responsibilities').value,
            relevant_skills: document.getElementById('relevant_skills').value,
            certifications: document.getElementById('certifications').value,
            start_date: document.getElementById('start_date').value,
            preferred_schedule: document.getElementById('preferred_schedule').value,
            relocate: document.getElementById('relocate').value,
            reference_name: document.getElementById('reference_name').value,
            reference_contact: document.getElementById('reference_contact').value,
            relationship: document.getElementById('relationship').value,
            why_work: document.getElementById('why_work').value,
           
        };

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const headers = Object.keys(formData);
        const headerRow = document.createElement('tr');
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText.replace('_', ' ').toUpperCase();
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        const dataRow = document.createElement('tr');
        headers.forEach(key => {
            const td = document.createElement('td');
            td.textContent = formData[key];
            dataRow.appendChild(td);
        });
        tbody.appendChild(dataRow);
        table.appendChild(tbody);
        document.body.appendChild(table);
    
        table.style.borderCollapse = 'collapse';
        table.style.width = '100%';
        table.style.border = '2px solid #ddd';
        table.style.fontSize = '14px';
    
        const thElements = table.querySelectorAll('th, td');
        thElements.forEach(element => {
            element.style.border = '1px solid #ddd';
            element.style.padding = '8px';
            element.style.textAlign = 'left';
        });
    
        const thHeaders = table.querySelectorAll('th');
        thHeaders.forEach(header => {
            header.style.backgroundColor = '#f2f2f2';
            header.style.color = '#333';
        });
    
        const evenRows = table.querySelectorAll('tr:nth-child(even)');
        evenRows.forEach(row => {
            row.style.backgroundColor = '#f9f9f9';
        });
    }
    
    function viewApplications() {

        const existingTable = document.querySelector('table');
        if (existingTable) {
            existingTable.remove();
        }
        processData();
    }
    document.getElementById('viewApplicationsButton').addEventListener('click', viewApplications);
});