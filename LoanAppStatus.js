<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loan Application Status</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <div class="flex justify-center mb-4">
            <img src="https://thijsdemostorage.blob.core.windows.net/demoimages/cfinancial.jpg" alt="Company Logo" class="h-16">
        </div>
        <h1 class="text-xl font-bold text-gray-800 text-center">Loan Application Status</h1>
        <div class="mt-4 space-y-3">
            <div class="flex justify-center mb-4">
                <img src="https://di-uploads-pod5.dealerinspire.com/mccluskeychevy/uploads/2024/04/2025-Chevy-Suburban-on-White-770x445.jpg" alt="Vehicle Image" class="h-40 w-auto rounded-lg">
            </div>
            <p class="text-gray-600"><strong>Loan Application #:</strong> 00124442</p>
            <p class="text-gray-600"><strong>Vehicle:</strong> 2025 Suburban LT</p>
            <p class="text-gray-600"><strong>Applicant Name:</strong> John Connor</p>
            <p class="text-gray-600"><strong>Date of Birth:</strong> 12/23/1988</p>
            <p class="text-gray-600 flex items-center">
                <strong>Driver's License:</strong> 
                <span class="bg-green-200 text-green-800 px-2 py-1 rounded flex items-center ml-2">
                    Successfully uploaded
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </span>
            </p>
        </div>
        <div class="mt-6 text-center">
           <button class="bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-purple-700" onclick="SDK.submit({ option: 'ok' })">Update Application</button>
        </div>
    </div>
</body>
</html>
