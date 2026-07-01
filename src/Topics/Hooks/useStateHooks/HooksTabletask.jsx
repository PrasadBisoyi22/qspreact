import { useState } from "react";

const HooksTabletask = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
            const response = await fetch("https://api.github.com/users");
            const json = await response.json();
            setData(json);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <button 
                onClick={fetchData} 
                style={{backgroundColor: '#007bff',color: 'white',border: 'none',padding: '10px 20px',fontSize: '16px',borderRadius: '5px',cursor: 'pointer',marginBottom: '20px'}}>
                Click me to fetch the data
            </button>
            
            <div style={{ overflowX: 'auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff", textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                id
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                login
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                node_id
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                avatar_url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                gravatar_id
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                html_url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                followers_url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                following_url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                gists_url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                starred_url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                subscriptions_url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                organizations_url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                repos_url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                events_url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                received_events_url
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                type
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                user_view_type
                                </th>
                            <th style={{ backgroundColor: "#f4f6f9", color: "#333", fontWeight: "bold", padding: "12px 15px", borderBottom: "2px solid #dee2e6", fontSize: "14px", whiteSpace: "nowrap" }}>
                                site_admin
                                </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((ele) => (
                            <tr key={ele.id} style={{ borderBottom: "1px solid #dee2e6" }}>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", minWidth: "120px" }}>{ele.id}

                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", minWidth: "120px" }}>{ele.login}

                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", minWidth: "120px" }}>{ele.node_id}

                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.avatar_url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.avatar_url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.gravatar_id} style={{ color: "#007bff", textDecoration: "none" }}>{ele.gravatar_id || "N/A"}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.html_url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.html_url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.followers_url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.followers_url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.following_url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.following_url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.gists_url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.gists_url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.starred_url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.starred_url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.subscriptions_url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.subscriptions_url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.organizations_url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.organizations_url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.repos_url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.repos_url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.events_url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.events_url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", wordBreak: "break-all", minWidth: "120px" }}>
                                    <a href={ele.received_events_url} style={{ color: "#007bff", textDecoration: "none" }}>{ele.received_events_url}</a>
                                </td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", minWidth: "120px" }}>{ele.type}</td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", minWidth: "120px" }}>{ele.user_view_type}</td>
                                <td style={{ padding: "12px 15px", fontSize: "14px", color: "#555", minWidth: "120px" }}>{ele.site_admin.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HooksTabletask;