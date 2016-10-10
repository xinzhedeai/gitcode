package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.WebFamily;
import po.WebFamilyExample;

public interface WebFamilyMapper {
    int countByExample(WebFamilyExample example);

    int deleteByExample(WebFamilyExample example);

    int insert(WebFamily record);

    int insertSelective(WebFamily record);

    List<WebFamily> selectByExample(WebFamilyExample example);

    int updateByExampleSelective(@Param("record") WebFamily record, @Param("example") WebFamilyExample example);

    int updateByExample(@Param("record") WebFamily record, @Param("example") WebFamilyExample example);
}